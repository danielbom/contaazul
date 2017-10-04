const templateItem = (options) => {
  const {
    marca,
    combustivel,
    placa,
    valor,
    modelo,
    imagem,
  } = options;

  return (
    `<tr class="contaazul__table__item">
      <td><input class="contaazul__checkbox" type="checkbox" name="car_plate[]" /></td>
      <td>${placa}</td>
      <td>${modelo}</td>
      <td class="contaazul__hide-for-mobile">${marca}</td>
      <td class="contaazul__hide-for-mobile">${imagem || 'Sem foto'}</td>
      <td class="contaazul__hide-for-mobile">${combustivel}</td>
      <td class="contaazul__align-right">${valor}</td>
    </tr>`
  );
};

const templateItemPagination = currentPage => ind => (
  `<li
    class="contaazul__pagination__item
    ${ind === (currentPage - 1) ? 'contaazul__pagination__item--active' : ''}"
  >
    <a class="contaazul__pagination__item__link" href="#" title="">${ind + 1}</a>
  </li>`
);

const templatePagination = (totalPages, currentPage) => (
  `
    <li class="contaazul__pagination__item">
      <a class="contaazul__pagination__item__link" href="#" title="">&laquo;</a>
    </li>
    ${Array.from(Array(totalPages).keys()).map(templateItemPagination(currentPage)).join('')}
    <li class="contaazul__pagination__item">
      <a class="contaazul__pagination__item__link" href="#" title="">&raquo;</a>
    </li>
  `
);

export {
  templateItem,
  templatePagination,
};