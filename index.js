/**
 * Fájl választó
 */
function toggleAccordion(fileNumber) {
    const fileContent = document.querySelector(`.file-item:nth-child(${fileNumber}) .file-content`);
    fileContent.style.display = (fileContent.style.display === 'block') ? 'none' : 'block';
}

function toggleAccordion_v2(fileNumber) {
    const fileContent = document.querySelector(`.file-item_v2:nth-child(${fileNumber}) .file-content_v2`);
    fileContent.style.display = (fileContent.style.display === 'block') ? 'none' : 'block';
}

/**
 * Üdvözlő szöveg
 */
document.addEventListener('DOMContentLoaded', function () {
    // Szövegek, amiket felváltva szeretnénk gépelni
    const textsToType = ["PROGRAMMER GNOME", "BACKEND DEVELOPER", "AVERAGE ARCH LINUX USER"];

    // Időzítő, hogy megvárja a CSS animáció végezze el a gépelő hatást
    setTimeout(() => {
        startTyping(textsToType);
    }, 1000);
});

function startTyping(texts) {
    const typingContainer = document.getElementById('typing-container');
    let currentTextIndex = 0;

    function type() {
        const text = texts[currentTextIndex];
        let index = 0;

        function typeCharacter() {
            typingContainer.textContent += text[index];
            index++;

            if (index < text.length) {
                setTimeout(typeCharacter, 100); // Az időzítés beállítja a karakterek közötti késleltetést
            } else {
                // Az egész szöveg kiírása után következő szövegre váltás
                setTimeout(() => {
                    typingContainer.textContent = ''; // Törlés a következő ismétlés előtt
                    currentTextIndex = (currentTextIndex + 1) % texts.length; // Körkörös váltás a szövegek között
                    type(); // Újraindítás a következő szöveggel
                }, 1000);
            }
        }

        typeCharacter();
    }

    type();
}

/**
 * Képmegjelenítés
 */
document.addEventListener('DOMContentLoaded', function () {
    const galleries = [
        {
            containerId: 'gallery',
            modalId: 'modal',
            modalImageId: 'modalImage',
            prefix: "images/my_photos/",
            images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg']
        },
        {
            containerId: 'gallery2',
            modalId: 'modal2',
            modalImageId: 'modalImage2',
            prefix: "images/my_photos/",
            images: ['img_v_1.jpg', 'img_v_4.jpg', 'img_v_3.jpg', 'img_v_2.jpg']
        }
        // TODO: Több képgalériát is lehet hozzáadni.
    ];

    galleries.forEach(gallery => setupGallery(gallery));

    function setupGallery({containerId, modalId, modalImageId, prefix, images}) {
        const galleryContainer = document.getElementById(containerId);
        const modal = document.getElementById(modalId);
        const modalImage = document.getElementById(modalImageId);

        images.forEach((image) => {
            const path = `${prefix}${image}`;
            const img = createImageElement(path);
            img.addEventListener('click', () => openModal(path, modal, modalImage));
            galleryContainer.appendChild(img);
        });

        modal.onclick = function (event) {
            if (event.target === modal) {
                closeModal(modal);
            }
        };
    }

    function createImageElement(path) {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Gallery Image';
        return img;
    }

    function openModal(path, modal, modalImage) {
        modal.style.display = 'block';
        modalImage.src = path;
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }
});
