<script lang="ts">
	import textColorStore from '../stores/textColor.store';
	import backgroundColorStore from '../stores/backgroundColor.store';
</script>

<section
	class="example-panel"
	style={`background-color: ${$backgroundColorStore}; color: ${$textColorStore}`}
>
	<h1>Contrast Evaluator</h1>
	<p>
		Change the text and background colors with the inputs below to see if the
		contrast ratio meets the levels proposed by the WCAG. In this panel you can
		see the graphic example of the defined contrast.
	</p>
</section>

<style lang="scss">
	.example-panel {
		width: 80%;
		padding: 4rem;
		border-radius: 30px;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
