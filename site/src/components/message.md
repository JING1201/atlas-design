---
title: Message
description: The message component in the Atlas Design System
template: standard
figmaEmbed: https://www.figma.com/proto/amgDNGgGYy2v2Unc6Eet46/Q%26A-Private-Messages?page-id=0%3A1&type=design&node-id=337-533145&viewport=-15969%2C-17033%2C0.75&scaling=min-zoom&starting-point-node-id=337%3A548136&show-proto-sidebar=1 allowfullscreen
classType: Component
classPrefixes:
  - message
---

# Message

Use message component for chat or messaging communications.

## Usage

Here is an example of a standard usage of message component.

```html
<article class="message">
	<p class="message-time">May 29, 2023, 4:50PM</p>
	<div class="persona message-persona">
		<figure class="persona-avatar">
			<img src="~/src/scaffold/media/avatar.png" alt="Avatar for Jane Doe" />
		</figure>
	</div>
	<div class="message-content">
		<div class="persona message-content-header">
			<div class="persona-details">
				<p class="persona-name font-weight-semibold">Q&A Moderator</p>
				<p class="font-size-xs">Moderator</p>
			</div>
			<div class="message-content-options">
				<span>⋮</span>
			</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
			eget egestas. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
		</p>
	</div>
</article>
```

Use the `message-sender` class to indicate message sent by the user.

```html
<article class="message message-sender">
	<p class="message-time">May 29, 2023, 4:55PM</p>
	<div class="persona message-persona">
		<figure class="persona-avatar">
			<img src="~/src/scaffold/media/avatar.png" alt="Avatar for Jane Doe" />
		</figure>
	</div>
	<div class="message-content">
		<div class="persona message-content-header">
			<div class="persona-details">
				<p class="persona-name font-weight-semibold">Kay Smith</p>
			</div>
			<div class="message-content-options">
				<span>⋮</span>
			</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras. Nisl nisi
			scelerisque eu ultrices vitae. Condimentum id venenatis a condimentum. Ut eu sem integer
			vitae.
		</p>
	</div>
</article>
```