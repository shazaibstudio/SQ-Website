# DesignLine Testimonial Replacement Guide

## Status: PLACEHOLDER ACTIVE (Arriving Tomorrow)

## Files to Update (3 locations)

### 1. Homepage (`index.html`)
**Search for:** `[Testimonial from DesignLine Construction arriving tomorrow`

**Replace block:**
```html
<article class="sq-testimonial-card sq-testimonial-card--placeholder" data-reveal>
  <div class="sq-testimonial-card__stars" aria-label="5 stars">
    ⭐⭐⭐⭐⭐
  </div>
  <blockquote class="sq-testimonial-card__quote">
    [Testimonial from DesignLine Construction arriving tomorrow — replace this placeholder with actual client feedback]
  </blockquote>
  <div class="sq-testimonial-card__author">
    <div class="sq-testimonial-card__avatar" aria-hidden="true">DL</div>
    <div class="sq-testimonial-card__info">
      <p class="sq-testimonial-card__name">DesignLine Construction</p>
      <p class="sq-testimonial-card__role">Client, Construction Industry</p>
    </div>
  </div>
</article>
```

**With:**
```html
<article class="sq-testimonial-card" data-reveal>
  <div class="sq-testimonial-card__stars" aria-label="5 stars">
    ⭐⭐⭐⭐⭐
  </div>
  <blockquote class="sq-testimonial-card__quote">
    "[PASTE ACTUAL TESTIMONIAL HERE]"
  </blockquote>
  <div class="sq-testimonial-card__author">
    <div class="sq-testimonial-card__avatar" aria-hidden="true">[INITIALS]</div>
    <div class="sq-testimonial-card__info">
      <p class="sq-testimonial-card__name">[CLIENT NAME]</p>
      <p class="sq-testimonial-card__role">[CLIENT ROLE], DesignLine Construction</p>
    </div>
  </div>
</article>
```

### 2. Digital World Page (`digital/index.html`)
**Same search/replace pattern as above**

---

## Instructions

1. When testimonial arrives, replace `[PASTE ACTUAL TESTIMONIAL HERE]` with the exact quote
2. Replace `[INITIALS]` with client's initials (e.g., "AR" for Ahmed Raiz)
3. Replace `[CLIENT NAME]` with client's full name
4. Replace `[CLIENT ROLE]` with client's title/role
5. Remove `sq-testimonial-card--placeholder` class from `<article>` tag
6. Verify stars remain `⭐⭐⭐⭐⭐` (5 stars) unless client specifies otherwise

---

## Pattern Match
**Current:** Both testimonials use this structure:
- 5-star rating
- Quote in double quotes
- Quantifiable result ("3 serious buyers in the first week", "bookings increased")
- Client name + role + company

**Keep consistency** — DesignLine testimonial should follow same pattern.

---

## Example (Ahmed Raiz format):
```
"[Specific quantifiable result]. [How it helped their business]."

AR
Ahmed Raiz
Real Estate Developer, DHA Lahore
```

---

## Search Commands
```bash
# Find all placeholder instances
grep -r "DesignLine Construction arriving tomorrow" .

# OR use Kiro search
```

**Files:** `index.html`, `digital/index.html`
