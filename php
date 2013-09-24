#!/bin/sh
umask 0077
PHPRC=.
LD_LIBRARY_PATH=/usr/local/lib:${LD_LIBARRY_PATH}
export PHPRC
export LD_LIBRARY_PATH
exec /usr/local/php5/bin/php-cgi
