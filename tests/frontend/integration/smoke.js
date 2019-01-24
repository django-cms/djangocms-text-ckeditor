'use strict';

var helpers = require('djangocms-casper-helpers');
var globals = helpers.settings;
var casperjs = require('casper');
var cms = helpers(casperjs);
var xPath = casperjs.selectXPath;

casper.test.setUp(function (done) {
    casper.start()
        .then(cms.login())
        .run(done);
});

casper.test.tearDown(function (done) {
    casper.start()
        .then(cms.logout())
        .run(done);
});

casper.test.begin('CKEditor loads correctly in the CMS wizard and TextPlugin', function (test) {
    casper
        .start(globals.editUrl)
        // wait till wizard modal show up automatically (since we don't have any pages)
        .waitUntilVisible('.cms-modal', function() {
            // switch to modal
            var framePosition = this.getElementBounds('.cms-modal-frame');

            casper.withFrame(0, function() {
                this.waitUntilVisible('.cms-content-wizard', function() {
                    // doubleclick on the "new page"
                    var choicePosition = this.getElementBounds('.choice.active');
                    var coordinates = [
                        framePosition.left + choicePosition.left + choicePosition.width / 2,
                        framePosition.top + choicePosition.top + choicePosition.height / 2
                    ];

                    this.mouse.doubleclick.apply(this, coordinates);
                })
                    .waitForResource(/cms_wizard\/create/)
                    // wait until next step loads
                    .waitUntilVisible('#cke_id_1-content', function() {
                        // ckeditor textarea has to be done like this
                        this.evaluate(function() {
                            CMS.CKEditor.editor.setData('Some text');
                        });

                        // submit the form from inside the modal
                        this.fill(
                            '.cms-content-wizard form',
                            {
                                '1-title': 'Homepage'
                            },
                            true
                        );
                    });
            });
        })
        .waitForResource(/cms_wizard\/create/)
        .waitForSelector('.cms-ready', function() {
            test.assertSelectorHasText(
                '.cms-plugin',
                'Some text',
                'The new page has been created and its content is correct'
            );
        })
        // make sure we are in content mode
        .then(cms.switchTo('content'))
        // check edit modal window appearance after double click in content mode
        // double click on last added plugin content
        .waitForSelector('.cms-toolbar-expanded', function() {
            this.mouse.doubleclick(
                // pick a div with class cms-plugin that has a p that has text "Random text"
                xPath('//*[contains(@class, "cms-plugin")][contains(text(), "Some text")]')
            );
        })
        .waitUntilVisible('.cms-modal-open')
        // change content inside appeared modal window
        .withFrame(0, function() {
            casper.waitUntilVisible('#text_form', function() {
                // explicitly put text to ckeditor
                this.evaluate(function(contentData) {
                    CMS.CKEditor.editor.setData(contentData);
                }, 'New text');
            });
        })
        // submit changes in modal
        .then(function() {
            this.click('.cms-modal-buttons .cms-btn-action.default');
        })
        // check if content updated
        .then(cms.waitUntilContentIsRefreshed())
        .then(function() {
            // ensure content updated with new one
            test.assertSelectorHasText(
                '.cms-plugin',
                'New text',
                'Content has been updated in the TextPlugin'
            );
        })
        .then(cms.removePage())
        .run(function() {
            test.done();
        });
});

casper.test.begin('CKEditor loads correctly in HTMLField', function (test) {
    casper
        .start(globals.baseUrl + 'admin/test_app/pizza/add')
        .waitForSelector('#pizza_form')
        .waitForSelector('#cke_id_description', function () {
            test.assertEval(function () {
                return typeof CKEDITOR.instances.id_description !== 'undefined'
            }, 'Description field initialized');
        })
        .then(function () {
            this.evaluate(function () {
                CKEDITOR.instances.id_description.setData('Best pizza');
            })
        })
        .then(function () {
            this.click('input[type=submit]');
        })
        .waitForSelector('.success', function () {
            test.assertSelectorHasText('.success', 'was added successfully.', 'Pizza added');
            test.assertSelectorHasText('.success', 'Pizza object', 'Pizza added');
        })
        .thenOpen(globals.baseUrl + 'admin/test_app/pizza/')
        .then(function () {
            this.click(xPath('//*[contains(text(), \'Pizza object\')]'));
        })
        .waitForSelector('#pizza_form', function () {
            test.assertEval(function () {
                return !!CKEDITOR.instances.id_description.getData().match(/Best pizza/);
            }, 'Pizza was added correctly, therefore CKEditor works');
        })
        .then(function () {
            this.click('.deletelink');
        })
        .waitForSelector('.delete-confirmation', function () {
            this.click('input[type=submit]');
        })
        .waitForSelector('.success')
        .run(function() {
            test.done();
        });
});

// NOTE: Disabled because when PizzaAdmin uses a collapsed
//       class then the order of javascript libs is incorrect.

// casper.test.begin('CKEditor loads correctly in collapsed fieldset', function (test) {
//     casper
//         .start(globals.baseUrl + 'admin/test_app/pizza/add')
//         .waitForSelector('#pizza_form')
//         .waitForSelector('#cke_id_description', function () {
//             test.assertEval(function () {
//                 return typeof CKEDITOR.instances.id_allergens !== 'undefined'
//             }, 'Allergens field initialized');
//         })
//         .then(function () {
//             this.click('.collapse-toggle');
//         })
//         .waitUntilVisible('#cke_id_allergens')
//         .then(function () {
//             test.assertVisible('#cke_id_allergens', 'CKEditor was initialized in the collapsed fieldset');
//         })
//         .then(function () {
//             this.evaluate(function () {
//                 CKEDITOR.instances.id_description.setData('Best pizza');
//                 CKEDITOR.instances.id_allergens.setData('Worst allergens tho');
//             })
//         })
//         .then(function () {
//             this.click('input[type=submit]');
//         })
//         .waitForSelector('.success', function () {
//             test.assertSelectorHasText('.success', 'was added successfully.', 'Pizza added');
//             test.assertSelectorHasText('.success', 'Pizza object', 'Pizza added');
//         })
//         .thenOpen(globals.baseUrl + 'admin/test_app/pizza/')
//         .then(function () {
//             this.click(xPath('//*[contains(text(), \'Pizza object\')]'));
//         })
//         .waitForSelector('#pizza_form', function () {
//             test.assertEval(function () {
//                 return !!CKEDITOR.instances.id_description.getData().match(/Best pizza/) &&
//                     !!CKEDITOR.instances.id_allergens.getData().match(/Worst allergens tho/);
//             }, 'Pizza was added correctly, therefore CKEditor works');
//         })
//         .then(function () {
//             this.click('.deletelink');
//         })
//         .waitForSelector('.delete-confirmation', function () {
//             this.click('input[type=submit]');
//         })
//         .waitForSelector('.success')
//         .run(function() {
//             test.done();
//         });
// });

casper.test.begin('CKEditor loads correctly in an inline', function (test) {
    casper
        .start(globals.baseUrl + 'admin/test_app/pizza/add')
        .waitForSelector('#pizza_form')
        .waitForSelector('#cke_id_description', function () {
            test.assertEval(function () {
                return typeof CKEDITOR.instances['id_topping_set-0-description'] !== 'undefined'
            }, 'Initial topping description field initialized');
            test.assertEval(function () {
                return Object.keys(CKEDITOR.instances).length === 3
            }, '3 ckeditors initialized');
        })
        .then(function () {
            this.evaluate(function () {
                CKEDITOR.instances.id_description.setData('Best pizza');
            })
        })
        .then(function () {
            this.evaluate(function () {
                CKEDITOR.instances['id_topping_set-0-description'].setData('Best topping');
                document.getElementById('id_topping_set-0-name').setAttribute('value', 'Cheese');
            })
        })
        .then(function () {
            this.click('.add-row a')
        })
        .waitForSelector('#cke_id_topping_set-1-description', function () {
            test.assertVisible('#cke_id_topping_set-1-description', 'Newly added inline is correctly initialized');
            test.assertEval(function () {
                return typeof CKEDITOR.instances['id_topping_set-1-description'] !== 'undefined'
            }, 'Added topping description field initialized');
            test.assertEval(function () {
                return Object.keys(CKEDITOR.instances).length === 4
            }, '4 ckeditors initialized');

            this.evaluate(function () {
                CKEDITOR.instances['id_topping_set-1-description'].setData('Second best topping');
                document.getElementById('id_topping_set-1-name').setAttribute('value', 'Ham');
            })
        })
        .then(function () {
            this.click('input[type=submit]');
        })
        .waitForSelector('.success', function () {
            test.assertSelectorHasText('.success', 'was added successfully.', 'Pizza added');
            test.assertSelectorHasText('.success', 'Pizza object', 'Pizza added');
        })
        .thenOpen(globals.baseUrl + 'admin/test_app/pizza/')
        .then(function () {
            this.click(xPath('//*[contains(text(), \'Pizza object\')]'));
        })
        .waitForSelector('#pizza_form', function () {
            test.assertEval(function () {
                return Object.keys(CKEDITOR.instances).length === 5
            }, '5 ckeditors initialized (4 saved + one extra)');

            test.assertEval(function () {
                return typeof CKEDITOR.instances['id_topping_set-0-description'] !== 'undefined'
            }, 'First topping description field initialized');
            test.assertEval(function () {
                return typeof CKEDITOR.instances['id_topping_set-1-description'] !== 'undefined'
            }, 'Second topping description field initialized');
            test.assertEval(function () {
                return !!CKEDITOR.instances['id_topping_set-0-description'].getData().match(/Best topping/);
            }, 'Pizza was added correctly, therefore CKEditor works');
            test.assertEval(function () {
                return !!CKEDITOR.instances['id_topping_set-1-description'].getData().match(/Second best topping/);
            }, 'Pizza was added correctly, therefore CKEditor works');
        })
        .then(function () {
            this.click('.deletelink');
        })
        .waitForSelector('.delete-confirmation', function () {
            this.click('input[type=submit]');
        })
        .waitForSelector('.success')
        .run(function() {
            test.done();
        });
});
