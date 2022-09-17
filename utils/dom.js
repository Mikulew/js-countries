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
    labelDescription.innerText = `${label}:`;
    valueDescription.innerText = value;
    descriptionElement.appendChild(labelDescription);
    descriptionElement.appendChild(valueDescription);
    return descriptionElement;
};

const createCountryElement = (country) => {
    const countryElement = document.createElement('li');
    const countryName = document.createElement('span');
    countryName.innerText = country.name;
    countryElement.appendChild(createFlagImageElement(country.flagUrl));
    countryElement.appendChild(countryName);
    countryElement.appendChild(createDescriptionElement("Population", country.population));
    countryElement.appendChild(createDescriptionElement("Region", country.region));
    countryElement.appendChild(createDescriptionElement("Capital", country.capital));
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
