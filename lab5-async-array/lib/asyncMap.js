//Callback-версія
export function asyncMapCallback(array, asyncFn, done) {
    const result = [];
    let completed = 0;

    if (array.length === 0) {
        done(null, result);
        return;
    }


 array.forEach((item, index) => {
    asyncFn(item, (err,value) => {
        if (err) {
            done(err);
            return;
        }
        result[index] = value;
        completed++;
        if (completed === array.length) {
            done(null, result);
        }
    });
  });
}


//Promise-версія
export function asyncMapPromise (array, asyncFn, signal) {
    return new Promise((resolve, reject) => {
        if (signal?.aborted) {
            reject(new Error("Aborted"));
            return;
        }

        const result = [];
        let completed =0

        if (array.length === 0) {
            resolve(result)
            return;
        }

        const onAbort = () => reject (new Error("Aborted"));
        signal?.addEventListener("abort", onAbort);

        array.forEach((item, index) => {
            Promise.resolve(asyncFn(item))
               .then((value) => {
                 if (signal?.aborted) return;
                 result[index] = value;
                 completed++
                 if (completed === array.length) { 
                    signal?.removeEventListener("abort", onAbort);
                    resolve(result);
                 }
               })
               .catch((err) => {
                signal?.removeEventListener("abort", onAbort);
                reject(err);
               });
        });
    });

}