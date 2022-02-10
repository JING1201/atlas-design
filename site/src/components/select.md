---
title: Select
description: The select component in the Atlas Design System
template: standard
figmaEmbed: https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuVA2amRR71yJZ0GS6RI6zL%2F%25F0%259F%258C%259E-Atlas-Design-Library%3Fnode-id%3D1488%253A35182
---

# Select

The Select element represents a control that provides a menu of options from which the user can make a single selection.

## Usage

Here is an example of a standard select usage paired with a label.

```html
<label class="label margin-bottom-xxs" for="select-id-1">Label</label>
<div class="select">
	<select name="select-1" id="select-id-1">
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
```

### Multiple select

There is an option to style a multiple select dropdowns by using the `.select-multiple` class in conjunction with `.select` and adding the `multiple` attribute to the `<select>` tag.

Hold down `control` button on Windows/`command` button on Mac to select multiple options.

```html
<div class="select select-multiple">
	<select name="select-2" id="select-id-2" multiple>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
		<option value="option-4">Option 4</option>
		<option value="option-5">Option 5</option>
		<option value="option-6">Option 6</option>
	</select>
</div>
```

### Disabled state

In order to achieve disabled styles, you'll need to add the `disabled` attribute to the `<select>` tag and also add the `.select-disabled` class in conjunction with `.select`.

```html
<div class="select select-disabled">
	<select name="select-3" id="select-id-3" disabled>
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
```

### Sizes

`select-sm`/`select-lg` makes input a little bigger or smaller than the default.

```html
<div class="select select-sm">
	<select name="select-4" id="select-id-4">
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
<div class="select margin-top-xs">
	<select name="select-5" id="select-id-5">
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
<div class="select select-lg margin-top-xs">
	<select name="select-6" id="select-id-6">
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
```

### Validation states

`select-error`/`select-success` helps with visual reflection of validation states.

| State   | Class                     |                                                                                                                                                                                                                                                                     |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Danger  | `.select .select-danger`  | <div class="select select-danger"><select name="select-7" id="select-id-7"><option value="">Choose an option</option><option value="option-1">Option 1</option><option value="option-2">Option 2</option><option value="option-3">Option 3</option></select></div>  |
| Success | `.select .select-success` | <div class="select select-success"><select name="select-8" id="select-id-8"><option value="">Choose an option</option><option value="option-1">Option 1</option><option value="option-2">Option 2</option><option value="option-3">Option 3</option></select></div> |

```abut-html
<div class="select select-danger">
	<select name="select" id="select-id">
		<option value="">Choose an option</option>
		<option value="option-1">Option 1</option>
		<option value="option-2">Option 2</option>
		<option value="option-3">Option 3</option>
	</select>
</div>
```