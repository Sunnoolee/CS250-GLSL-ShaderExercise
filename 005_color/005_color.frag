#version 330

// Name: sunwoo.lee
// Assignment name: Setup with glslViewer & do Color Frag Shader
// Course name: CS250
// Term: 2022 Spring

precision mediump float;

out vec4 FragColor;

void main(){
    vec3 color=vec3(.3,.5,.3);
    
    FragColor=vec4(color,.5);
}
