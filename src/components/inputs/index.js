export const PhraseInputs = (
    value =
        {title: "", meaning: "", selectedAuthor: "", selectedCategory: ""},
    optionsItems = {authors: {}, categories: {}}) => [
    {
        name: "title",
        placeholder: "",
        type: "text",
        value: value.title,
        className: "w-100 form-control",
        labelText: "Title"
    },
    {
        name: "meaning",
        placeholder: "",
        type: "textarea",
        value: value.meaning,
        className: "w-100 form-control",
        labelText: "Meaning"
    },
    {
        name: "author_id",
        placeholder: "",
        type: "select",
        value: optionsItems.authors,
        selectedValue: value.selectedAuthor,
        className: "w-100 form-control",
        labelText: "Author"
    },
    {
        name: "category_id",
        placeholder: "",
        type: "select",
        value: optionsItems.categories,
        selectedValue: value.selectedCategory,
        className: "w-100 form-control",
        labelText: "Category"
    },
    {
        name: "submit",
        placeholder: "",
        type: "submit",
        value: "Submit",
        className: "btn submit"
    }
]

export const AuthorInputs = (value = {firstName: "", lastName: ""}) => {
    return [
        {
            name: "firstName",
            placeholder: "",
            type: "text",
            value: value.firstName,
            className: "w-100 form-control",
            labelText: "First name"
        },
        {
            name: "lastName",
            placeholder: "",
            type: "text",
            value: value.lastName,
            className: "w-100 form-control",
            labelText: "Last name"
        },
        {
            name: "submit",
            placeholder: "",
            type: "submit",
            value: "Submit",
            className: "btn submit"
        }
    ]
}


export const CategoriesInputs = (value = "") => {
    return [
        {
            name: "name",
            placeholder: "",
            type: "text",
            value: value.name,
            className: "w-100 form-control",
            labelText: "Category name"
        },
        {
            name: "submit",
            placeholder: "",
            type: "submit",
            value: "Submit",
            className: "btn submit"
        }
    ]
}