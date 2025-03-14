import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'inter': [
  				'var(--font-inter)'
  			],
  			'subheader': [
  				'var(--font-montserrat-bold)'
  			],
  			'body': [
  				'var(--font-montserrat)'
  			],
  			'header': [
  				'var(--font-caslon)',
  				'serif'
  			],
  			'logo': [
  				'var(--font-seasons)',
  				'serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			red: {
  				'50': 'hsl(var(--red-50))',
  				'100': 'hsl(var(--red-100))',
  				'300': 'hsl(var(--red-300))',
  				'600': 'hsla(12, 48%, 68%, 1)'
  			},
  			stone: {
  				'50': 'hsl(var(--stone-50))',
  				'100': 'hsl(var(--stone-100))',
  				'200': 'hsl(var(--stone-200))'
  			},
  			neutral: {
  				'800': 'hsl(var(--neutral-800))'
  			},
  			zinc: {
  				'800': 'hsl(var(--zinc-800))'
  			},
  			ramsha: {
  				accent: '#010101',
  				primary: '#22323B',
  				secondary: '#FFF',
  				tertiary: '#AA6347'
  			},
  			gray: {
  				'50': 'hsl(var(--gray-50))',
  				'900': 'hsl(var(--gray-900))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			'lg.5': '33.75rem',
  			'xl.5': '40.625rem',
  			'3xl.5': '52rem',
  			'5xl.5': '70rem'
  		},
  		transitionTimingFunction: {
  			'in-out-episode': 'cubic-bezier(.455,.03,.515,.955)'
  		},
  		boxShadow: {
  			button: '2px 2px 0px 1px #000000',
  			'button-hover': '-2px -2px 0 1px #000000'
  		},
  		backgroundImage: {
  			'gallery-card-pattern': 'linear-gradient(#0000,#000 82%)',
  			'landing-stone-pattern': 'linear-gradient(180deg, #F9E5CF 0%, #FDF2E7 100%)',
  			'landing-red-pattern': 'radial-gradient(146.09% 137.18% at 100% -4950%, #C57E6D 0%, #D1978A 100%);',
  			'landing-neutral-pattern': 'linear-gradient(180deg, #000000 0%, #242424 100%)',
  			'landing-stone-dark': 'linear-gradient(99.28deg, #D0AF91 0%, #F3DEC6 100%)'
  		},
  		animation: {
  			'bg-shine': 'bg-shine 2.1s linear infinite',
  			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
  			pulse: 'pulse var(--duration) ease-out infinite',
  			marquee: 'marquee var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			},
  			'bg-shine': {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
