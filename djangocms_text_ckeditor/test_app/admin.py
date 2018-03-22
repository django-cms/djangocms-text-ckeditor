from django.contrib import admin
from .models import Topping, Pizza


class ToppingInlineAdmin(admin.TabularInline):
    model = Topping
    extra = 1


class PizzaAdmin(admin.ModelAdmin):
    fieldsets = (
        ('', {
            'fields': ('description',),
        }),
        ('Advanced', {
            'classes': ('collapse',),
            'fields': ('allergens',)
        }),
    )
    inlines = [ToppingInlineAdmin]


admin.site.register(Pizza, PizzaAdmin)
