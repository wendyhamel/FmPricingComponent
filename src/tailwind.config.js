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
				'color-bg-gradient-start' : withOpacity('--bg-color-gradient-start'),
				'color-bg-gradient-end' : withOpacity('--bg-color-gradient-end'),
				'color-text-full' : withOpacity('--text-color-full'),
				'divider-color' : withOpacity('--divider-color'),
				'color-text-muted' : withOpacity('--text-color-muted'),
				'color-button-gradient-start' : withOpacity('--button-color-gradient-start'),
				'color-button-gradient-end' : withOpacity('--button-color-gradient-end'),
				'color-button-text' : withOpacity('--text-color-button'),
				'color-button-text-active' : withOpacity('--text-color-button-active'),
			},
		}
	}
}
