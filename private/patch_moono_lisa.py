import os
import glob

src_folder = "./moono-lisa"
dst_folder = "../djangocms_text_ckeditor/static/djangocms_text_ckeditor/ckeditor/skins"


def replace(contents, orig, new):
    var_str = f"var({new}, {orig})"
    contents = contents.replace(orig, new)
    contents = contents.replace(orig.upper(), new)
    if len(orig) == 4:
        contents = replace(contents, "#"+contents[1]+contents[1]+contents[2]+contents[2]+contents[3]+contents[3], new)
    return contents


def update_contents(contents):
    """Replace hard-coded colors with dca dark mode variables"""
    contents = replace(contents, "#fff", "var(--dca-white)")
    contents = replace(contents, "#000", "var(--dca-black)")
    contents = replace(contents, "#f8f8f8", "var(--dca-gray-super-lightest)")
    contents = replace(contents, "#ebebeb", "var(--dca-gray-lightest)")
    contents = replace(contents, "#e9e9e9", "var(--dca-gray-lightest)")
    contents = replace(contents, "#e5e5e5", "var(--dca-gray-lightest)")
    contents = replace(contents, "#e4e4e4", "var(--dca-gray-lightest)")
    contents = replace(contents, "#d1d1d1", "var(--dca-gray-lighter)")
    contents = replace(contents, "#dddddd", "var(--dca-gray-lighter)")
    contents = replace(contents, "#bcbcbc", "var(--dca-gray-lighter)")
    contents = replace(contents, "#aeb3b9", "var(--dca-gray-lighter)")
    contents = replace(contents, "#acacac", "var(--dca-gray-lighter)")
    contents = replace(contents, "#a0a0a0", "var(--dca-gray-light)")
    contents = replace(contents, "#979797", "var(--dca-gray-light)")
    contents = replace(contents, "#888", "var(--dca-gray)")
    contents = replace(contents, "#80808", "var(--dca-gray)")
    contents = replace(contents, "#484848", "var(--dca-gray-darker)")
    contents = replace(contents, "#139ff7", "var(--dca-primary)")
    return contents

for css in glob.glob(f"{src_folder}/*.css"):
    with open(css, "r") as rd:
        with open(f"{dst_folder}/{css}", "w") as wt:
            print("Patching", css)
            contents = update_contents(rd.read())
            if "editor" in css:
                contents += "@media(prefers-color-scheme: dark){.cke_button_icon" \
                            "{filter:brightness(3);}}"
            contents += "\n/* Patched for djangocms-text-ckeditor */\n"
            wt.write(contents)
