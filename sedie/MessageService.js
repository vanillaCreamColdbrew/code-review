const MessageService = {
  addMessage(targetElement, msg) {
    const p = document.createElement("p")
    p.innerHTML = msg
    targetElement.appendChild(p)
    scrollTo(0, app.clientHeight)
  },
}
