const stages = [
    ["IA", "IB", "IIA", "IIB", "IIIA", "IVA", "IVB"],
    ["IIA", "IIB", "IIB", "IIIA", "IIIA", "IVA", "IVB"],
    ["IIB", "IIA", "IIA", "IIIA", "IIIB", "IVA", "IVB"],
    ["IIIA", "IIB", "IIB", "IIB", "IIB", "IVA", "IVB"],
    ["IIB", "IIB", "IIB", "IIC", "IIC", "IVA", "IVB"]
];
function submit() {
    let TM = document.getElementById("tm").value
    let N = document.getElementById("n").value
    document.getElementById("result").innerHTML = stages[N][TM]
}