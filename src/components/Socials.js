import React from 'react';

export default function Socials(){
    return(
        <section id="contact" className="relative">
        <div class="flex items-center justify-center space-x-4">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700">
        <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-gray-900">
        <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-600">
        <i class="fab fa-twitter"></i>
        </a>
        </div>
        </section>
    )
}