const createListElement = () => {
    const listElement = document.createElement('ul');
    return listElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector('#main');
    rootElement.appendChild(createListElement(countries));
};
