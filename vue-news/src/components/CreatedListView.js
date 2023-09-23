import ListView from './ListView.vue';


export default function createListView(name) {
    return {
        // 재사용할 인스턴트(컴포넌트) - HOC
        name: name,
        render(createElement) {
            return createElement(ListView);
        }
    }
}