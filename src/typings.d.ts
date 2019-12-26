declare var process: Process;

interface Process {
    env: Env
}

interface Env {
    PERSONAL_ACCESS_TOKEN: string;
}

interface GlobalEnvironment {
    process: Process
}
