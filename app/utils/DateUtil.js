export function getAge() {

    let today = new Date();
    let birthDate = new Date('05-10-2001');

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (month < 0) {
        age--;
    }

    return age + " anos";
}