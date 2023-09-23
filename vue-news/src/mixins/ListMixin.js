import bus from '../utils/bus.js';

export default {
    mounted() {
        setTimeout(() =>bus.$emit('end:spinner'),500);
        
    }
}