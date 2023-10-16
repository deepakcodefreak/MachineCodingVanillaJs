const state = {
    data: posts,
    page: 1,
    rows: 5,
    window: 5
}

function onPageButtonClickHandler(i) {
    state.page = i
    buildTable()
    renderPagination()
}

function filteredData() {
    const startTrim = (state.page - 1) * state.rows;
    const endTrim = startTrim + state.rows
    return state.data.slice(startTrim, endTrim)
}

function renderPagination() {
    const paginationWrapper = document.querySelector('.pagination-wrapper')
    paginationWrapper.innerHTML = ''
    const { data, page, rows } = state;
    const totalPages = Math.ceil(data.length / rows)
    let maxLeft = state.page - Math.floor(state.window / 2)
    let maxRight = state.page + Math.floor(state.window / 2)

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > totalPages) {
        maxRight = totalPages;
        maxLeft = totalPages - state.window + 1

        if (maxLeft < 1) {
            maxLeft = 1
        }
    }

    for (let i = maxLeft; i <= maxRight; i++) {
        const pageBtn = document.createElement('button')
        pageBtn.innerText = i;
        pageBtn.addEventListener('click', () => onPageButtonClickHandler(i))
        paginationWrapper.appendChild(pageBtn)
    }

    if (page !== 1) {
        const pageBtn = document.createElement('button')
        pageBtn.innerText = 'First';
        pageBtn.addEventListener('click', () => onPageButtonClickHandler(1))
        paginationWrapper.prepend(pageBtn)
    }

    if (page !== totalPages) {
        const pageBtn = document.createElement('button')
        pageBtn.innerText = 'Last';
        pageBtn.addEventListener('click', () => onPageButtonClickHandler(totalPages))
        paginationWrapper.append(pageBtn)
    }

}

function buildTable() {
    const data = filteredData()
    const postsTable = document.querySelector('.posts-table')
    postsTable.innerHTML = ''

    data.forEach((post) => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <div>${post.id}<div>
        `
        postsTable.appendChild(row)
    })
}

renderPagination()
buildTable()