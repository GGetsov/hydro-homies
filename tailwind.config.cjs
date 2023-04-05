/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
        plugin(function({ addUtilities }) {
          addUtilities({
            '.arrow-hide':{
                '&::-webkit-inner-spin-button':{
                    '-webkit-appearance': 'none',
                    'margin': 0
                    },
                '&::-webkit-outer-spin-button':{
                    '-webkit-appearance': 'none',
                    'margin': 0
                    },
                "-moz-appearance":"textfield"
            }
          })
        })
    ]
};
