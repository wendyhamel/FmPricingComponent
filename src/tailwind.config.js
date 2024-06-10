function withOpacity(colorVariableName) {
	return ({opacityValue}) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${colorVariableName}), ${opacityValue})`
		}
		return `rgb(var(${colorVariableName}))`
	}
}

tailwind.config = {
	theme: {
		fontFamily : {
			'sans': ['Montserrat', 'sans-serif'],
		},
		extend: {
			fontSize: {
				custom: '0.9375rem',
				'3.5xl': '2rem',
				'4.5xl': '2.5rem',
			},
			colors: {
				blue: {
					'gradient-start': 'hsl(236, 72%, 79%)',
					'gradient-end': 'hsl(237, 63%, 64%)',
					'50': 'hsl(240, 78%, 98%)',
					'100': 'hsl(234, 14%, 74%)',
					'500': 'hsl(233, 13%, 49%)',
					'600': 'hsl(232, 13%, 33%)',
				},
				'color-bg-gradient-start' : withOpacity('--bg-gradient-start'),
				'color-bg-gradient-end' : withOpacity('--bg-gradient-end'),
				'color-full' : withOpacity('--text-full'),
				'color-muted' : withOpacity('--text-muted'),
				'color-border' : withOpacity('--border'),
				'color-divider' : withOpacity('--divider'),
				'button-gradient-start' : withOpacity('--button-gradient-start'),
				'button-gradient-end' : withOpacity('--button-gradient-end'),
				'button-gradient-start-inverted' : withOpacity('--button-gradient-start-inverted'),
				'button-gradient-end-inverted' : withOpacity('--button-gradient-end-inverted'),
				'button-active-border' : withOpacity('--text-full'),
				'button-text' : withOpacity('--text-button'),
				'button-text-inverted' : withOpacity('--text-button-inverted'),
			},
		}
	}
}
