console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://dog.ceo/api/breeds/image/random/4"
    const api2 = "https://dog.ceo/api/breeds/list/all"
    let idCounter = 1

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const imageContainer = document.querySelector('#dog-image-container')

            data.message.forEach(imageUrl => {
                const card = document.createElement('div')
                card.classList.add('card')
                const img = document.createElement('img')
                img.src = imageUrl
                card.append(img)

                imageContainer.appendChild(card)
            })
        })

    fetch(api2)
        .then(res => res.json())
        .then(data => {
            const breedContainer = document.querySelector('#dog-breeds')

            for (const breed in data.message) {
                const breedList = document.createElement('li')

                breedList.textContent = breed

                breedContainer.appendChild(breedList)
            }
            function generateId() {
                return 'item ' + idCounter++;
            }

            const listItems = document.getElementsByTagName('li')

            for (let i = 0; i < listItems.length; i++) {
                const uniqueId = generateId()
                listItems[i].setAttribute('id', uniqueId)
            }
            breedContainer.addEventListener('click', () => {
                document.querySelector('#dog-breeds').style.color = "magenta"
            })
        })
})





