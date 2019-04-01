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
                process.stdout.write(process.versions.node);
                break;
            case '/env':
                process.stdout.write(process.env.computername);
                break;

            default:
                process.stderr.write('Wrong instruction!\n');

        }
    }
});