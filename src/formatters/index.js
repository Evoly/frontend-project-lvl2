import plainFormat from './plainFormat.js';
import stylish from './stylishFormat.js';
import jsonFormat from './jsonFormat.js';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return plainFormat(data);
    case 'stylish':
      return stylish(data);
    case 'json':
      return jsonFormat(data);
    default:
      throw new Error(`Invalid format - ${format}`);
  }
};
