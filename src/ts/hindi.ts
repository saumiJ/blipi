import { getElementByIdAssured, RowData, emptyCell } from "./helpers";

const showTable = (table: HTMLTableElement, rowsText: Array<RowData>, IDLabel: string) => {
    for (const [rowNumber, rowText] of rowsText.entries()) {
        const row: HTMLTableRowElement = table.insertRow();
        row.id = `table-${IDLabel}-row-${rowNumber}`;
        for (const [primaryText, secondaryText] of rowText) {
            const cell: HTMLTableCellElement = row.insertCell();
            cell.classList.add("table-letters-cell");
            if (primaryText == "-" && secondaryText == "-") {
                cell.classList.add("emptyCell");
            }

            const vowel: HTMLElement = cell.appendChild(document.createElement("p"));

            const primaryLetter: HTMLSpanElement = <HTMLSpanElement>(vowel.appendChild(document.createElement("span")));
            primaryLetter.classList.add("letter-primary");
            primaryLetter.classList.add("show-primary");
            primaryLetter.textContent = primaryText;

            const secondaryLetter: HTMLSpanElement = <HTMLSpanElement>(vowel.appendChild(document.createElement("span")));
            secondaryLetter.classList.add("letter-secondary");
            primaryLetter.classList.add("show-secondary");
            secondaryLetter.textContent = secondaryText;
        }
    }
};

const tableVowels: HTMLTableElement = <HTMLTableElement>(getElementByIdAssured(document, "table-vowels"));
const vowelRowsText: Array<RowData> = [
    [["अ", "a"], ["आ", "ā"], ["इ", "i"], ["ई", "ī"], ["उ", "u"], ["ऊ", "ū"]],
    [["ए", "ē"], ["ऐ", "ai"], ["ओ", "ō"], ["औ", "au"], ["अं", "ṁ"], ["अः", "ḥ"]]
];
showTable(tableVowels, vowelRowsText, "vowels");

const tableConsonants: HTMLTableElement = <HTMLTableElement>(getElementByIdAssured(document, "table-consonants"));
const consonantRowsText: Array<RowData> = [
    [["क्", "k"], ["ख्", "kh"], ["ग्", "g"], ["घ्", "gh"], ["ङ्", "ṅ"], emptyCell, emptyCell, ["ह्", "h"]],
    [["च्", "c"], ["छ्", "ch"], ["ज्", "j"], ["झ्", "jh"], ["ञ्", "ñ"], ["य्", "y"], ["श्", "ś"], emptyCell],
    [["ट्", "ṭ"], ["ठ्", "ṭh"], ["ड्", "ḍ"], ["ढ्", "ḍh"], ["ण्", "ṇ"], ["र्", "r"], ["ष्", "ṣ"], emptyCell],
    [["त्", "t"], ["थ्", "th"], ["द्", "d"], ["ध्", "dh"], ["न्", "n"], ["ल्", "l"], ["स्", "s"], emptyCell],
    [["प्", "t"], ["फ्", "ph"], ["ब्", "b"], ["भ्", "bh"], ["म्", "m"], ["व्", "v"], emptyCell, emptyCell],
];
showTable(tableConsonants, consonantRowsText, "consonants");