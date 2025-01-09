import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/images/**/**'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                brush: ['Brush Script MT', 'cursive']
            }, 
            backgroundImage: {
                'crown-town': "url('/resources/images/crownTown.webp')",
                'footer-texture': "url('/resources/images/footer-texture.png')",
                'katulistiwa':"url('/resources/images/template/katulistiwa.webp')"
            }
        },
    },

    plugins: [forms],
};
