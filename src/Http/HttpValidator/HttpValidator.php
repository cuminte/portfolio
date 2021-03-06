<?php

namespace Larafolio\Http\HttpValidator;

interface HttpValidator
{
    /**
     * Validate the given url.
     *
     * @param string $url The url to validate.
     *
     * @return int http code
     */
    public function validate($url);
}
