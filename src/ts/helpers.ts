export const getElementByIdAssured = (_document: Document, _id: string): HTMLElement => {
    const element = _document.getElementById(_id);
    if (element == null)
        throw TypeError("element is null");
    return element;
};

export type CellData = [string, string];
export type RowData = Array<CellData>;

export const emptyCell: CellData = ["-", "-"];