const createFlagImageElement = (url) => {
    const imageContainerElement = document.createElement('div');
    const imageElement = document.createElement('img');

    imageElement.src = url;
    imageContainerElement.appendChild(imageElement)

    return imageContainerElement;
};

const createDescriptionElement = (label, value) => {
    const descriptionElement = document.createElement('div');
    const labelDescription = document.createElement('strong');
    const valueDescription = document.createElement('span');

    labelDescription.innerText = `${label}: `;
    valueDescription.innerText = value;

    descriptionElement.appendChild(labelDescription);
    descriptionElement.appendChild(valueDescription);

    return descriptionElement;
};

const createCountryElement = (country) => {
    const countryElement = document.createElement('li');
    const countryContainer = document.createElement('div');
    const countryName = document.createElement('strong');

    countryElement.classList.add('country-container');
    countryContainer.classList.add('country-info-container');
    countryName.classList.add('country-name');
    countryName.innerText = country.name;

    countryElement.appendChild(createFlagImageElement(country.flagUrl));
    countryContainer.appendChild(countryName);
    countryContainer.appendChild(createDescriptionElement("Population", country.population));
    countryContainer.appendChild(createDescriptionElement("Region", country.region));
    countryContainer.appendChild(createDescriptionElement("Capital", country.capital));
    countryElement.appendChild(countryContainer);

    return countryElement;
};

const createListElement = (countries) => {
    const listElement = document.createElement('ul');
    countries.forEach(country => listElement.appendChild(createCountryElement(country)));

    return listElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#root');
    rootElement.appendChild(createListElement(countries));
};
