(ns hello
  (:require [cljs.nodejs :as nodejs]))

(defn greet [n]
  (println (str "Hello, " n)))

(nodejs/next-tick
  (fn []
    (greet "World!")))
