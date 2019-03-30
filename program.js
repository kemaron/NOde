process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/ver':
                console.log(process.versions);
                break;
            case '/env':
                console.log(process.env);
                break;

            default:
                process.stderr.write('Wrong instruction!\n');

        }
    }
});