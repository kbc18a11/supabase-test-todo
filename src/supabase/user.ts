import supabase from './supabase';

export const findAdd = async () => {
    let { data, error } = await supabase
        .from('')
        .select('*');

    if (error) {
        return error;
    }

    return data;
};


export const create = async (name: string) => {
    const { data, error } = await supabase
        .from('')
        .insert([
            { name: name },
        ])

    if (error) {
        return error;
    }

    return data;
}
