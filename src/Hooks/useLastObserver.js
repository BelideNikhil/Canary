import { useEffect } from "react";

export function useLastObserver({ lastPost, observer }) {
    useEffect(() => {
        //setting the latest last post to be obeserved
        const currentObserver = observer.current;
        if (lastPost) {
            currentObserver.observe(lastPost);
        }
        return () => {
            if (lastPost) {
                //unsetting the previous last post
                currentObserver.disconnect();
            }
        };
    }, [lastPost, observer]);
}
