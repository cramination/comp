import { defineConfig } from 'vite';
 
 export default defineConfig({
        resolve: {
          alias: {
            '@': '/src', // Example alias
          },
        },

    server: {

        port: 5137 // Change this to your desired port

    }

}
)