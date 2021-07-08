async function paginate(model, pageSize, pageLimit, search, transform) {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;

        // create an options object
        let options = {
            offset: getOffset(page, limit),
            limit: limit,
        };

        // check if the search object is empty
        if (Object.keys(search).length) {
            options = {...options, ...search};
        }

        //console.log('options: ', options);

        // take in the model, take in the options

        let {count, rows} = await model.findAndCountAll(options);
            // check if the transform is a function and is not null
            //console.log("rows: ", rows);
            if (transform && typeof transform === 'function') {
                //console.log("preview mapper");
                rows = transform(rows);
            }
            //console.log("rows: ", rows);
            return {
                preview: getPreviousPage(page),
                current: page,
                next: getNextPage(page, limit, count),
                total: count,
                pages: getPages(pageSize, count),
                size: limit,
                data: rows
            }
    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page, limit) => {
 return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total/limit) > page) {
        return page + 1;
    }

    return null
}

const getPages = (size, total) => {
    //total / size
    if (size > 0) {
        return total / size;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}

module.exports = paginate;