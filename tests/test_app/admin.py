from django.contrib import admin

from .models import Pizza, Topping


class ToppingInlineAdmin(admin.TabularInline):
    model = Topping
    extra = 1


@admin.register(Pizza)
class PizzaAdmin(admin.ModelAdmin):
    fieldsets = (
        ('', {
            'fields': ('description',),
        }),
        ('Advanced', {
            # NOTE: Disabled because when PizzaAdmin uses a collapsed
            # class then the order of javascript libs is incorrect.
            # 'classes': ('collapse',),
            'fields': ('allergens',)
        }),
    )
    inlines = [ToppingInlineAdmin]


