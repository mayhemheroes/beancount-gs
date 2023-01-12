# FROM fuzzers/go-fuzz:1.2.0
FROM golang:1.18 as builder

COPY . /beancount-gs
WORKDIR /beancount-gs/mayhem

RUN go install github.com/dvyukov/go-fuzz/go-fuzz@latest github.com/dvyukov/go-fuzz/go-fuzz-build@latest
RUN go get github.com/dvyukov/go-fuzz/go-fuzz-dep
RUN apt update && apt install -y clang


RUN go-fuzz-build -libfuzzer -o fuzzScript.a && \
    clang -fsanitize=fuzzer fuzzScript.a -o fuzzScript.libfuzzer

FROM debian:bookworm-slim
COPY --from=builder /beancount-gs/mayhem/fuzzScript.libfuzzer /
RUN mkdir -p /.beancount-ns
RUN touch /.beancount-ns/account_type.json