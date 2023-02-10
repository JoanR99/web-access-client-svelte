<script lang="ts">
	import textColorStore from '../stores/textColor.store';
	import backgroundColorStore from '../stores/backgroundColor.store';
	import { getContrastStatus } from '../contrast.utils';

	$: contrastStatus = getContrastStatus($textColorStore, $backgroundColorStore);
</script>

<section class="status-panel">
	<p>
		Contrast ratio:{' '}
		<span style={`color: ${contrastStatus.didPass ? 'green' : 'red'}`}>
			{contrastStatus.formattedRatio}
			{contrastStatus.statusMessage}
		</span>
	</p>
</section>

<style lang="scss">
	@import '../theme';

	.status-panel {
		font-family: $font-heading;
	}
</style>
