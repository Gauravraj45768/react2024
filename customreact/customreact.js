function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.baidu.com',
        target:'_blank'
    },
    children: '百度一下,你就知道'
}
const mainContainer=document.querySelector('#root')
    customRender(reactElement, mainContainer)
    
