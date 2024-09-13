import plainFormat from "./plainFormat.js";
import stylish from "./stylishFormat.js";

export default (data, format) => {
    switch (format) {
        case 'plain':
            return plainFormat(data);
        case 'stylish':
            return stylish(data);    
        default:
            return stylish(data);
    }
};