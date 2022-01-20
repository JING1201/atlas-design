---
title: Checkbox
description: The checkbox component in the Atlas Design System
template: standard
figmaEmbed: https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FuVA2amRR71yJZ0GS6RI6zL%2F%25F0%259F%258C%259E-Atlas-Design-Library%3Fnode-id%3D855%253A1014"
---

# Checkbox

A checkbox is a square box that allows you to select the displayed option when activated. It is usually associated with form submissions.

<div class="table-wrapper margin-top-xs">
	<table class="table">
		<thead>
			<tr>
				<th>Type</th>
				<th>Default</th>
				<th>Disabled</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Unchecked</td>
				<td>
					<label class="checkbox font-size-md">
						<input type="checkbox" />
						<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
						<span class="checkbox-text" aria-hidden="true">Default</span>
					</label>
				</td>
				<td>
					<label class="checkbox font-size-md">
						<input type="checkbox" disabled />
						<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
						<span class="checkbox-text" aria-hidden="true">Disabled</span>
					</label>
				</td>
			</tr>
			<tr>
				<td>Checked</td>
				<td>
					<label class="checkbox font-size-md">
						<input type="checkbox" checked />
						<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
						<span class="checkbox-text" aria-hidden="true">Default</span>
					</label>
				</td>
				<td>
					<label class="checkbox font-size-md">
						<input type="checkbox" disabled checked />
						<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
						<span class="checkbox-text" aria-hidden="true">Disabled</span>
					</label>
				</td>
			</tr>
		</tbody>
	</table>
</div>

## Usage

Here is an example of a group of checkboxes. Default spacing is added between each `.checkbox` when there is more than one checkbox.

```html
<label class="checkbox margin-bottom-xxs">
	<input type="checkbox" />
	<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
	<span class="checkbox-text" aria-hidden="true">Checkbox 1</span>
</label>

<label class="checkbox">
	<input type="checkbox" checked />
	<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
	<span class="checkbox-text" aria-hidden="true">Checkbox 2</span>
</label>
```

## Modifiers

### Styles

`.checkbox-muted` can be used with `.checkbox` to change the checkbox background color.

```html
<label class="checkbox checkbox-muted">
	<input type="checkbox" checked />
	<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
	<span class="checkbox-text" aria-hidden="true">Checked</span>
</label>
```

`is-checked` can be used with `.checkbox-check` to create the appearance of a checkbox with a checked state, without having a clickable `.checkbox` input element.

```html
<label class="checkbox">
	<span class="checkbox-check is-checked" role="presentation" aria-hidden="true"></span>
	<span class="checkbox-text" aria-hidden="true">Checked</span>
</label>
```

### Size

`.checkbox-sm` is used with `.checkbox` to display a smaller checkbox.

```html
<label class="checkbox checkbox-sm">
	<input type="checkbox" checked />
	<span class="checkbox-check" role="presentation" aria-hidden="true"></span>
	<span class="checkbox-text" aria-hidden="true">Checked</span>
</label>
```
