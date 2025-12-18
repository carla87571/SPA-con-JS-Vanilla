import getHash from "../utils/getHash.js";
import getData from "../utils/getData.js";


const Character = async () => {
    const hash = getHash();
    const id = hash.split('/')[1];
    if (!id) {
        return `<div class="Characters-inner"><h2>Personaje no encontrado</h2></div>`;
    }
    const character = await getData(id);
    if (!character || !character.episode) {
        return `<div class="Characters-inner"><h2>Personaje no encontrado</h2></div>`;
    }

        const view = `
            <div class="Characters-inner">
                <article class="Characters-card character-image-card">
                    <img src="${character.image}" alt="${character.name}" loading="lazy" style="display:block;max-width:100%;height:auto;border-radius:16px;"/>
                    <h2>${character.name}</h2>
                </article>
                <article class="Characters-card character-detail-card">
                    <h3>Episodes: <span>${character.episode.length}</span></h3>
                    <h3>Status: ${character.status}</h3>
                    <h3>Species: ${character.species}</h3>
                    <h3>Gender: ${character.gender}</h3>
                    <h3>Origin: ${character.origin.name}</h3>
                    <h3>Last location: ${character.location.name}</h3>
                </article>
            </div>
            <div class="Back-btn-container">
                <a href="#/" class="Back-btn">← Volver al listado</a>
            </div>
        `;
        return view;
};
export default Character;