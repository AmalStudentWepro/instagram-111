

export function storie(item) {

        const story = document.createElement(`div`)
        const img = document.createElement(`img`)
        const nick = document.createElement(`div`)

        story.classList.add(`story`)
        nick.classList.add(`nickname`)

        img.src = item.url
        nick.innerHTML =`nickname`


        story.append(img, nick)

    return story

    }
