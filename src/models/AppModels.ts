interface AuthorModel {
    author_ID: number,
    firstName: string,
    lastName: string
}

interface CategoryModel {
    category_ID: number,
    name: string
}

interface PhraseModel {
    phrase_ID: number,
    title: string,
    meaning: string,
    author: AuthorModel,
    category: CategoryModel
}

interface filterPhraseModel {
    className: StyleSheetList | null,
    searchList: Array<any>
    phraseArray: Array<PhraseModel>,
    authorsArray: Array<AuthorModel>,
    categoriesArray: Array<CategoryModel>,
    setRenderList: Function
}

interface PhraseSearcherProps {
    searchList: Array<any>
}
