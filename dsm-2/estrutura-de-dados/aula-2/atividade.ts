function bubbleOptView(v: string[]) {
    let last_arr_position = v.length - 1;
    let last_swap_position = last_arr_position - 1;
    let swap_pos = 0;
    let array_pass_count = 0;

    console.log("Array original:", ...v);

    while (swap_pos >= 0) {
        swap_pos = -1;
        let j = 0;
        ++array_pass_count;

        while (j <= last_swap_position) {
            if (v[j] > v[j + 1]) {
                let aux = v[j];
                v[j] = v[j + 1];
                v[j + 1] = aux;
                swap_pos = j;
            }
            ++j;
        }

        last_swap_position = swap_pos;

        console.log(`Array após passagem #${array_pass_count}:`, ...v);
        console.log("Última posição de troca:", swap_pos);
    }
}

const nomes = ["Henrique", "Fabrício", "Arley", "Gabriel"];

bubbleOptView(nomes);

console.log("Array ordenado:", nomes);