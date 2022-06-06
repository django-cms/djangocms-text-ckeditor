import glob

src_folder = "./moono-lisa"
dst_folder = "../djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor/skins"


def replace(contents, orig, new):
    var_str = f"var({new}, {orig})"
    contents = contents.replace(orig, var_str)
    if not orig[1:].isdigit():
        contents = contents.replace(orig.upper(), var_str)
    if len(orig) == 4:
        contents = replace(
            contents,
            "#"
            + contents[1]
            + contents[1]
            + contents[2]
            + contents[2]
            + contents[3]
            + contents[3],
            new,
        )
    return contents


def update_contents(contents):
    """Replace hard-coded colors with dca dark mode variables"""
    contents = replace(contents, "#fff", "--dca-white")
    contents = replace(contents, "#000", "--dca-black")
    contents = replace(contents, "#f8f8f8", "--dca-gray-super-lightest")
    contents = replace(contents, "#ebebeb", "--dca-gray-lightest")
    contents = replace(contents, "#e9e9e9", "--dca-gray-lightest")
    contents = replace(contents, "#e5e5e5", "--dca-gray-lightest")
    contents = replace(contents, "#e4e4e4", "--dca-gray-lightest")
    contents = replace(contents, "#d1d1d1", "--dca-gray-lighter")
    contents = replace(contents, "#dddddd", "--dca-gray-lighter")
    contents = replace(contents, "#bcbcbc", "--dca-gray-lighter")
    contents = replace(contents, "#aeb3b9", "--dca-gray-lighter")
    contents = replace(contents, "#acacac", "--dca-gray-lighter")
    contents = replace(contents, "#a0a0a0", "--dca-gray-light")
    contents = replace(contents, "#979797", "--dca-gray-light")
    contents = replace(contents, "#888", "--dca-gray")
    contents = replace(contents, "#80808", "--dca-gray")
    contents = replace(contents, "#484848", "--dca-gray-darker")
    contents = replace(contents, "#139ff7", "--dca-primary")
    return contents


for css in glob.glob(f"{src_folder}/*.css"):
    with open(css) as rd:
        with open(f"{dst_folder}/{css}", "w") as wt:
            print("Patching", css)
            contents = update_contents(rd.read())
            if "editor" in css:
                contents += (
                    ".cke_button_icon{filter:"
                    "brightness(calc(1.5 * var(--active-brightness)));}"
                )
            contents += "\n/* Patched for djangocms-text-ckeditor */\n"
            wt.write(contents)
