import getDiff from './diff.js';
import readFiles from './parse.js';
import format from './formatters/index.js';

const genDiff = (filepath1, filepath2, scheme) => {
    const file1 = readFiles(filepath1);
    const file2 = readFiles(filepath2);

    return format(getDiff(file1, file2), scheme);
}

export default genDiff;
