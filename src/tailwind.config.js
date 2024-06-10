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
				'gradient-start' : withOpacity('--gradient-start'),
				'gradient-end' : withOpacity('--gradient-end'),
				'full' : withOpacity('--text-full'),
				'muted' : withOpacity('--text-muted'),
				'divider' : withOpacity('--divider'),
				'button-gradient-start' : withOpacity('--button-gradient-start'),
				'button-gradient-end' : withOpacity('--button-gradient-end'),
				'accent' : withOpacity('--accent'),
				'accent-inverted' : withOpacity('--accent-inverted'),
				'button-text' : withOpacity('--text-button'),
				'button-text-inverted' : withOpacity('--text-button-inverted'),
			},
		}
	}
}
